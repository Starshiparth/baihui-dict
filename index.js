//function print_alert(){
//    alert("同学，你好！")
//    alert("欢迎来到百汇词典！");
//    alert("本词典项目创建于2023年2月13日，现在，你可以尽情的访问啦！");
//    alert("希望百汇词典能给你带来一些用处~");
//    alert("如果觉得我们做得好，就请扫码，为爱发电吧！");
//    alert("作者：星舰Earth，为战而生、敲代码的李小白");
//    alert("时间：2023/2/13")
//    }
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
    const repeatedGreetings = async () => {
      await sleep(300)
      document.title = "百"
      await sleep(300)
      document.title = "百汇"
      await sleep(300)
      document.title = "百汇词"
      await sleep(300)
      document.title = "百汇词典"
      await sleep(300)
      document.title = "百汇词典 | "
      await sleep(300)
      document.title = "百汇词典 | 与"
      await sleep(300)
      document.title = "百汇词典 | 与众"
      await sleep(300)
      document.title = "百汇词典 | 与众不"
      await sleep(300)
      document.title = "百汇词典 | 与众不同"
    }
    repeatedGreetings()
//    await sleep(1000)
//    print_alert()