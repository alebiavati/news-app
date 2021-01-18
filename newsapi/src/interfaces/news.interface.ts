export interface News {
  publish_date: String,
  source_id: String,
  source_name: String,
  title: String,
  url: String,
  section: String,
};

export interface NewsInput {
  query: String,
}
