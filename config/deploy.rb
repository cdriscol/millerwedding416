set :repo_url, 'https://github.com/cdriscol/millerwedding416.git'
# set :repo_url, 'git@drizkol.unfuddle.com:drizkol/driscolsoftware.git'

# http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start
# globally set ssh settings
set :ssh_options, {
  user: 'chris',
  keys: %w(~/.ssh/millerwedding416),
  forward_agent: true,
  auth_methods: %w(publickey password)
}

# user info
set :user, 'chris'
# set :use_sudo, false

# subversion repo username and password
set :scm, :git
set :branch, 'master'
set :scm_command, 'git'
set :deploy_via, :remote_cache  # only updates changed files
