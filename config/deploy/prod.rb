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
    keys: %w(~/.ssh/millerwedding416),
    forward_agent: true,
    auth_methods: %w(publickey password)
  }

namespace :deploy do
  # precompile assets
  task :precompile_assets do
    on roles(:app) do
      puts 'installing bower assets'
      execute "cd #{release_path}; bower install"
      
      puts 'installing npm assets'
      execute "cd #{release_path}; npm cache clean"
      execute "cd #{release_path}; npm install"
    end
  end

  task :start do ; end
  task :stop do ; end

    # restart the server
  task :restart do
    on roles(:app) do
      puts 'restarting NGINX'
      execute "sudo service nginx restart"
    end
  end


  task :start_app do
    on roles(:app) do
      puts "executing: pm2 stop server"
      execute "cd #{deploy_to}/current && pm2 stop millerwedding416"
      
      execute "cd #{deploy_to}/current && pm2 delete millerwedding416"

      puts "executing: pm2 start server"
      execute "cd #{deploy_to}/current && pm2 start server.js --name \"millerwedding416\""
    end
  end
end

after "deploy:updated", "deploy:precompile_assets"
after "deploy:published" , "deploy:start_app"
after "deploy:start_app", "deploy:restart"
after "deploy:restart", "deploy:cleanup" # leave the last 5 releases only
