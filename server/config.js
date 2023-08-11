/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 2,
    text: "一等奖",
    title: "GPT Plus Membership 1 Month",
    img: "../img/openai.jpg"
  },
  {
    type: 2,
    count: 10,
    text: "二等奖",
    title: "Selfhost Community Canvas Bag",
    img: "../img/bag.png"
  },
  {
    type: 3,
    count: 10,
    text: "三等奖",
    title: "刮刮乐",
    img: "../img/lucky.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 2, 10, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "MaX";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
