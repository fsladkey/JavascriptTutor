require 'rails_helper'

describe User do
  describe "validations" do
      it { should validate_presence_of(:email) }
      it { should validate_presence_of(:session_token) }
  end

  describe "associations" do
    it { should have_many(:code_files)}
  end

end
