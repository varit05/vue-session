const rocketMixins = {
  created() {
    console.log("This is created lifecycle hook from Mixins");
  },
  data() {
    return {
      companyName: "Tesla SpaceX"
    };
  }
};

export default rocketMixins;
