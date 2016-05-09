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

FactoryGirl.define do
  factory :code_file do |f|
    f.content "console.log(\"Hello World!\")"
    f.user_id 0
  end
end
