function changeurl(url: string, title: string) {
  var new_url = url;
  window.history.pushState("data", title, new_url);
}

export default changeurl