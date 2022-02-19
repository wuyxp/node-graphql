# node-graphql
graphql node 服务器

启动服务
```
 npm run dev 
```

输入 http://localhost:5000/graphql 查看实例页面

将下面的代码进行测试

```
# 创建
# mutation{
#   SaveUser(input: {name:"ccc", age: 30}){
#     id
#     name
#     age
#   }
# }

# 查询
query {
  UserList {
    name
    age
  }
}

```