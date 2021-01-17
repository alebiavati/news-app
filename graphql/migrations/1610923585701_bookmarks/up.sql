CREATE TABLE public.bookmarks (
    id integer NOT NULL,
    user_id text NOT NULL,
    title text NOT NULL,
    publish_date date NOT NULL,
    url text NOT NULL,
    source_name text NOT NULL,
    source_id text NOT NULL
);
CREATE SEQUENCE public.bookmarks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.bookmarks_id_seq OWNED BY public.bookmarks.id;
ALTER TABLE ONLY public.bookmarks ALTER COLUMN id SET DEFAULT nextval('public.bookmarks_id_seq'::regclass);
ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_pkey PRIMARY KEY (id);
