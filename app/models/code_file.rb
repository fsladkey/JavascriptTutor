# == Schema Information
#
# Table name: code_files
#
#  id         :integer          not null, primary key
#  content    :text             default(""), not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CodeFile < ActiveRecord::Base
  belongs_to :user
end
