set :stage, :prod

set :application, 'millerwedding416.com'

set :deploy_to, "/opt/millerwedding416"

# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary
# server in each group is considered to be the first
# unless any hosts have the primary property set.
role :web, fetch(:application)
role :app, fetch(:application)
role :app, 'millerwedding416.com'

# set environment
# set :rails_env, "demo"

# subversion repo username and password
set :scm, :git
set :branch, 'master'
set :scm_command, 'git'
set :deploy_via, :remote_cache	# only updates changed files

# fixes the "sorry, you must have a tty to run sudo" issue
#default_run_options[:pty] = true

set :use_sudo, false

# Extended Server Syntax
# ======================
# This can be used to drop a more detailed server
# definition into the server list. The second argument
# something that quacks like a hash can be used to set
# extended properties on the server.
set :user, 'chris'

# you can set custom ssh options
# it's possible to pass any option but you need to keep in mind that net/ssh understand limited list of options
# you can see them in [net/ssh documentation](http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start)
# set it globally
  set :ssh_options, {
    user: 'chris',
    keys: %w(~/.ssh/id_rsa),
    forward_agent: true,
    auth_methods: %w(publickey password)
  }

namespace :deploy do
  # forever stop server.js
  desc "forever stop server.js"
  task :stop_forever do
    on roles(:app) do
      begin
        #puts "executing: forever stop server.js"
        #execute "cd #{deploy_to}/current && forever stop server.js"
      rescue
        #do nothing!  Had to do this because :on_error => :continue didn't work
      end
    end
  end

  # precompile assets
  task :precompile_assets do
    on roles(:app) do
      execute "cd #{release_path}; NODE_ENV=production bower install"
      execute "cd #{release_path}; npm cache clean"
      execute "cd #{release_path}; NODE_ENV=production npm install"
      execute "cd #{release_path}; NODE_ENV=production npm install email-templates"
      execute "cd #{release_path}; NODE_ENV=development grunt build"
    end
  end

  task :start do ; end
  task :stop do ; end

    # restart the server
  task :restart do
    on roles(:app) do
      puts 'RESTARTING NGINX'
      execute "sudo service nginx stop"
      execute "sudo service nginx start"
    end
  end


  task :start_app do
    on roles(:app) do
      puts "executing: forever stopalll"
      execute "cd #{deploy_to}/current && forever stopall"

      puts "executing: starter.sh"
      execute "cd #{deploy_to} && ./starter.sh"
    end
  end

  def execute_interactively(command)
      user = fetch(:user)
      port = fetch(:port) || 22
      exec "ssh -l #{user} #{host} -p #{port} -t 'source /etc/profile; cd #{deploy_to}/current && #{command}'"
    end

    def withsource(command)
       "source /etc/profile; #{command}"
    end
end

#before "deploy:update", "deploy:chown_app_dir"
after "deploy:updated", "deploy:precompile_assets"
after "deploy:published" , "deploy:stop_forever"
after "deploy:stop_forever", "deploy:start_app"
after "deploy:start_app", "deploy:restart"
after "deploy:restart", "deploy:cleanup" # leave the last 5 releases only
