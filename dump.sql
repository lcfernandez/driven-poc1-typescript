--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: recipes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.recipes (
    id integer NOT NULL,
    name text NOT NULL,
    ingredients text NOT NULL,
    directions text NOT NULL,
    rating smallint,
    CONSTRAINT recipes_rating_check CHECK (((rating >= 0) AND (rating <= 10)))
);


--
-- Name: recipes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.recipes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: recipes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.recipes_id_seq OWNED BY public.recipes.id;


--
-- Name: recipes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recipes ALTER COLUMN id SET DEFAULT nextval('public.recipes_id_seq'::regclass);


--
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.recipes VALUES (6, 'Batida de cappuccino', 'Metade de uma lata de leite condensado (395g), 40g de cappuccino solúvel, 200ml leite integral, 100ml vodka e 5 pedras de gelo', 'Bater tudo no liquidificador (de preferência, líquidos mais abaixo). Ir provando e acertando a gosto (deixar mais espesso ou ralo, mais forte ou mais fraco, etc).', NULL);
INSERT INTO public.recipes VALUES (2, 'Reviro', '1,5kg de farinha de trigo, 6 ovos, 180ml de óleo, 200ml de água e sal a gosto', 'Misturar a farinha, ovos e sal, adicionando a água aos poucos, até que a massa comece a soltar. Aquecer o óleo em uma panela grande e despejar a massa. Mexer/girar quase o tempo todo (dando atenção ao centro) em fogo baixo. Tampar a panela de vez em quando para cozinhar a massa. Tirar pedaços queimados e quebrar os muito grandes até que todos os grãos aparentem estar cozidos.', 7);
INSERT INTO public.recipes VALUES (3, 'Pavê de coco', '1 lata de leite condensado, a mesma medida de leite, 1 lata de creme de leite (sem soro), 3 ovos, 1 pacote de coco ralado, 1 colher de sopa de açúcar, 1 pacote de biscoito maisena', 'Em uma panela coloque o leite condensado, a mesma medida de leite e as gemas dos ovos. Leve ao fogo e vá mexendo até levantar fervura. Retire do fogo e despeje o creme em uma travessa e cubra com biscoito. Misture num pote o creme de leite, as claras em neve, o açúcar e a metade do pacote de coco ralado. Despeje o creme na travessa com as outras camadas e cubra com biscoito socado misturado com o resto do coco ralado e leve à geladeira. O tempo de deixar o pavê na geladeira é de 24h, ou mais ou menos 1h no freezer e depois mais umas 3h na geladeira.', 9);
INSERT INTO public.recipes VALUES (4, 'Batida de paçoca/amendoim', '8 paçocas (22g cada) ou 1 xícara de amendoim triturado, 1 lata de leite condensado, 7 cubos de gelo, 125ml de vodka e duas colheres de leite em pó', 'Bater tudo no liquidificador (de preferência, líquidos mais abaixo). Ir provando e acertando a gosto (deixar mais espesso ou ralo, mais forte ou mais fraco, etc).', 8);
INSERT INTO public.recipes VALUES (5, 'Batida de coco', '1 lata de leite condensado, 400ml (1 garrafa grande) de leite de coco, 100g de coco fresco ralado, 300ml (ou a gosto) de vodca, 10 pedras de gelo e 2 colheres de leite em pó', 'Bater tudo no liquidificador (de preferência, líquidos mais abaixo). Ir provando e acertando a gosto (deixar mais espesso ou ralo, mais forte ou mais fraco, etc).', 7);


--
-- Name: recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.recipes_id_seq', 6, true);


--
-- Name: recipes recipes_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_id_key UNIQUE (id);


--
-- Name: recipes recipes_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_name_key UNIQUE (name);


--
-- PostgreSQL database dump complete
--

