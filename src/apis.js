import fetch from "./utils/request";
// 个人代表报名
export let personalApply = data => {
  return fetch({
    method: "post",
    url: "/v1/special/person_reg",
    data: data
  });
};
export let getLastedNews = () => {
  return fetch({
    method: "post",
    url: "/v1/special/rec_news"
  });
};
export let getHotNews = () => {
  return fetch({
    method: "post",
    url: "/v1/special/hot_news"
  });
};
export let getGallery = () => {
  return fetch({
    method: "post",
    url: "/v1/special/pic_list"
  });
};
export let getCompanyLogoes = () => {
  return fetch({
    method: "post",
    url: "/v1/special/company"
  });
};
export let getGalleryDetail = id => {
  return fetch({
    method: "post",
    url: "/v1/special/pic_details",
    data: { id: id }
  });
};
export let getCompanyDetail = id => {
  return fetch({
    method: "post",
    url: "/v1/special/company_details",
    data: { cp_id: id }
  });
};
export let getNewsDetail = nid => {
  return fetch({
    method: "post",
    url: "/v1/special/news_details",
    data: {
      nid: nid
    }
  });
};
