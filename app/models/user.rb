# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string
#  session_token   :string
#  firstname       :string
#  lastname        :string
#  admin           :boolean          default("false"), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :admin, inclusion: { in: [true, false] }

  after_initialize :ensure_session_token, :ensure_admin

  has_many :code_files

  def self.find_by_credentials(user_params)
    user = find_by(email: user_params[:email])
    user && user.valid_password?(user_params[:password]) ? user : nil
  end

  def admin?
    admin
  end

  def self.random_token
    loop do
      token = SecureRandom::urlsafe_base64
      return token unless exists?(session_token: token)
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_digest
    BCrypt::Password.new(super)
  end

  def valid_password?(password)
    password_digest.is_password?(password)
  end

  def reset_session_token!
    update!(session_token: User.random_token)
    session_token
  end

  private

  def ensure_session_token
    self.session_token = User.random_token
  end

  def ensure_admin
    self.admin ||= false
  end

end
