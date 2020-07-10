# Configuration your .gitconfig

## command: git config --global --edit

[credential]
	helper = your_password
[user]
	email = your_email_of_git
	name = your_name
[push]
    followTags = true
[core]
	editor = your_editor_code Ex: code
[alias]
	s = !git status -s
	c = !git add --all && git commit -m
	l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'

