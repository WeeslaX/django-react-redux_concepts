import moment from "moment";

export const ip = ["173.98.182.223", "251.91.209.163"];

export const lineColours = ["#8884d8", "#82ca9d", "#8884d8", "#82ca9d"];

export var data0 = [
  {
    name: moment().format("HH:mm:ss")
  },
  {
    name: moment()
      .add(20, "seconds")
      .format("HH:mm:ss")
  },
  {
    name: moment()
      .add(40, "seconds")
      .format("HH:mm:ss")
  },
  {
    name: moment()
      .add(60, "seconds")
      .format("HH:mm:ss")
  },
  {
    name: moment()
      .add(80, "seconds")
      .format("HH:mm:ss")
  },
  {
    name: moment()
      .add(100, "seconds")
      .format("HH:mm:ss")
  },
  {
    name: moment()
      .add(120, "seconds")
      .format("HH:mm:ss")
  }
];

export var data1 = [
  {
    name: moment().format("HHmm"),
    uv: null,
    pv: 2400
  },
  {
    name: moment()
      .add(1, "hours")
      .format("HHmm"),
    uv: null,
    pv: 1398
  },
  {
    name: moment()
      .add(2, "hours")
      .format("HHmm"),
    uv: null,
    pv: 9800
  },
  {
    name: moment()
      .add(3, "hours")
      .format("HHmm"),
    uv: 5000,
    pv: 3908
  },
  {
    name: moment()
      .add(4, "hours")
      .format("HHmm"),
    uv: 1890,
    pv: 4800
  },
  {
    name: moment()
      .add(5, "hours")
      .format("HHmm"),
    uv: 2390,
    pv: 3800
  },
  {
    name: moment()
      .add(6, "hours")
      .format("HHmm"),
    uv: 3490,
    pv: 4300
  }
];

export var data2 = [
  {
    name: moment().format("HHmm"),
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: moment()
      .add(1, "hours")
      .format("HHmm"),
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: moment()
      .add(2, "hours")
      .format("HHmm"),
    uv: 2000,
    pv: 5800,
    amt: 2290
  },
  {
    name: moment()
      .add(3, "hours")
      .format("HHmm"),
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: moment()
      .add(4, "hours")
      .format("HHmm"),
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: moment()
      .add(5, "hours")
      .format("HHmm"),
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: moment()
      .add(6, "hours")
      .format("HHmm"),
    uv: 190,
    pv: 10000,
    amt: 2100
  }
];
