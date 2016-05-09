User.destroy_all
CodeFile.destroy_all

fred = User.create!(
  firstname: "Fred",
  lastname: "Sladkey",
  email: "fsladkey@gmail.com",
  password: "password"
)

fred.code_files.create!(
  title: "my_first_file.js",
  content: "console.log(\"hello world!\");"
)
