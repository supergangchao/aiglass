// TypeScript测试文档
interface User {
  name: string;
  age: number;
}

// 故意的错误：类型不匹配
const user: User = {
  name: "张三",
  age: "应该是数字"  // 错误：应该是number类型
};

// 未定义变量错误
console.log(undefinedVariable);

// 属性不存在错误
console.log(user.email);