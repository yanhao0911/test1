新增文件：

	git add *
	
	git commit -m 'tip:add test1.txt'
	
	git remote add origin http://xxxx(第一次才用，之后不要)
	
	git push -n origin master
	
删除文件(界面上全部删除之后要先add)：

	git rm test1.txt
	
	git commit -m 'tip:delete test1.txt'
	
	git push -n origin master	
	
修改文件：

	git add *
	
	git commit -m 'tip:delete test1.txt'
	
	git push -n origin master	