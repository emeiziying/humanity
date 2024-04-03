/**
 * PersonClass
 *
 */
// export class PersonClass {
//   _data: Person.PersonData;
//   constructor(data: Person.PersonData) {
//     this._data = data;
//   }
// }

// 写一个名为Person的类, 该类有一个名为_data的私有属性, 该属性的类型为Person.PersonData, 该类有一个构造函数, 该构造函数接受一个名为data的参数, 该参数的类型为Person.PersonData, 在构造函数中将data赋值给_data
// Person随身可以携带一些工具或者食物，方便在游戏中使用，所以我们给Person类添加一个名为package的属性，该属性的类型为数组
// 角色可能会死亡，所以我们给Person类添加一个名为isDead的属性，该属性的类型为布尔值
// 为了方便我们在游戏中使用角色的数据，我们给Person类添加一个名为getData的方法，该方法返回角色的数据
// 为了方便我们在游戏中使用角色的数据，我们给Person类添加一个名为getPackage的方法，该方法返回角色的package
// 为了方便我们在游戏中使用角色的数据，我们给Person类添加一个名为isDead的方法，该方法返回角色是否死亡
// 为了方便我们在游戏中使用角色的数据，我们给Person类添加一个名为die的方法，该方法将角色的isDead属性设置为true
// 添加一个工种属性，该属性的类型为字符串
// 添加最大寿命属性，该属性的类型为数字
// 添加一个名为work的方法，该方法接受一个名为workType的参数，该参数的类型为字符串，该方法将角色的工种设置为workType
// 添加一个update方法，年龄随着时间而增加，当年龄大于等于最大寿命时，角色死亡
// 添加一个名为getAge的方法，该方法返回角色的年龄
// 添加一个名为getWork的方法，该方法返回角色的工种
// 增加一个产能属性，该属性的类型为数字
// update执行的时候计算当前角色的产出并输出
