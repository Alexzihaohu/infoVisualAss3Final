const remove = (element, filter_object) => {
  // delete the
  element.parentElement.remove();

  // update chart
  if (filter_object == "feature") filter_features.splice(filter_features.indexOf(element.value), 1);
  if (filter_object == "language") filter_languages.splice(filter_languages.indexOf(element.value), 1);
  refresh_hotel_data();
  update_rank_chart(rank_chart, default_hotel_data);
};

const add = (select, list, filter_object) => {
  var item_list = list.getElementsByTagName("a");
  // skip if already added
  for (let i = 0; i < item_list.length; i++) {
    if (select.value === item_list[i].id) return;
  }
  content = document.createElement("a");
  content.id = select.value;
  content.innerHTML =
    select.value +
    `<button value=${select.value} onClick='remove(this, "${filter_object}")'>remove</button>`;
  list.append(content);

  // update chart
  if (filter_object == "feature") filter_features.push(select.value);
  if (filter_object == "language") filter_languages.push(select.value);
  refresh_hotel_data();
  update_rank_chart(rank_chart, default_hotel_data);
};

const select = document.querySelector("#feature_filter");
const list = document.getElementById("filter_list");
select.onchange = () => {
  add(select, list, "feature");
};
const language_select = document.querySelector("#language_filter");
const language_list = document.getElementById("language_filter_list");
language_select.onchange = () => {
  add(language_select, language_list, "language");
};
