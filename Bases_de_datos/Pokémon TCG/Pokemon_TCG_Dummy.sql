SET NAMES utf8mb4;
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';
SET @old_autocommit=@@autocommit;

USE Pokemon_TCG;

-- Normalizar a 1NF, 3 tablas, 1 por tipo, otra: debil_id PK tipo_id FK debil otra: eficaz_id PK tipo eficaz

INSERT INTO Tipo VALUES(1, "Acero"),
(2, "Agua"),
(3, "Bicho"),
(4, "Fantasma"),
(5, "Fuego"),
(6, "Hada"),
(7, "Hielo"),
(8, "Lucha"),
(9, "Planta"),
(10, "Psíquico");

INSERT INTO Elementos VALUES (1,3,3,7),
(2,4,10,4),
(3,3,1,2),
(4,4,9,3),
(5,8,5,1),
(6,8,10,8),
(7,3,3,3),
(8,2,3,1),
(9,1,6,2),
(10,5,6,2);

INSERT INTO Pokemon_base VALUES(1, "Beedrill", "desc pokemon", 1, 19, 3, 4, 3, 40),
(2, "Gengar", "desc pokemon", 2, 23, 3, 4, 3, 46),
(3, "Kakuna", "desc pokemon", 3, 23, 1, 3, 4, 52),
(4, "Chandeliur", "desc pokemon", 4, 37, 2, 4, 4, 58),
(5, "Lucario", "desc pokemon", 5, 27, 3, 4, 4, 26),
(6, "Jitmonlee", "desc pokemon", 6, 26, 2, 4, 3, 53),
(7, "Butterfree", "desc pokemon", 7, 40, 3, 4, 3, 49),
(8, "Pliplup", "desc pokemon", 8, 17, 1, 4, 4, 69),
(9, "Klingklang", "desc pokemon", 9, 38, 2, 5, 3, 48),
(10, "Charmander", "desc pokemon", 10, 31, 1, 5, 3, 21);

INSERT INTO Cartas_Entrenador VALUES (1, "Cynthia", "desc", "efecto"),
(2, "Masterball", "desc", "efecto"),
(3, "Cook", "desc", "efecto"),
(4, "Roho", "desc", "efecto"),
(5, "Misty", "desc", "efecto"),
(6, "Pokedex", "desc", "efecto"),
(7, "Rare Candy", "desc", "efecto"),
(8, "Reboot Pod", "desc", "efecto"),
(9, "Switch", "desc", "efecto"),
(10, "Great ball", "desc", "efecto");


INSERT INTO Energia VALUES (1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

INSERT INTO Jugador VALUES(1, "ballasterceremony", "jZ8C66CMdchd", 1, 16, 63, 70, 78),
(2, "seafowldotted", "hq4UbTUw7VbS", 7, 5, 13, 59, 14),
(3, "keelhaulwriggle", "k64mCzHpUC4E", 28, 12, 75, 40, 56),
(4, "aeriebureaucrat", "mrHdNuXKGUpf", 3, 8, 85, 52, 51),
(5, "helicopterinterview", "YSvU6NSjvsKE", 42, 20, 44, 56, 50),
(6, "tawdryexpensive", "uVBc7ePPTpjB", 31, 19, 35, 51, 61),
(7, "illusionideal", "ehycNurYhHWN", 32, 10, 0, 98, 46),
(8, "puddlingcrying", "agHaDGZPpHME", 34, 18, 33, 76, 24),
(9, "clunkcoveralls", "nhLru8PCJV3L", 34, 20, 16, 29, 22),
(10, "importantflipflops", "2FWGMN8vS4Lj", 46, 19, 26, 82, 78);


INSERT INTO Mazo_base VALUES(1, 8, 7, 8, 1),
(2, 7, 8, 7, 1),
(3, 7, 8, 6, 1),
(4, 8, 8, 8, 1),
(5, 6, 7, 6, 1),
(6, 8, 8, 7, 1),
(7, 7, 6, 6, 1),
(8, 8, 6, 8, 1),
(9, 7, 6, 8, 1),
(10, 6, 6, 7, 1);

INSERT INTO Inventario VALUES (1, 9, 10, 7, 8, 6),
(2, 4, 3, 6, 7, 8),
(3, 10, 4, 4, 10, 8),
(4, 6, 3, 1, 2, 3),
(5, 7, 10, 10, 1, 2),
(6, 9, 9, 4, 8, 3),
(7, 4, 6, 6, 3, 6),
(8, 9, 3, 4, 9, 10),
(9, 7, 1, 1, 5, 10),
(10, 4, 5, 9, 7, 7),
(11, 10, 6, 9, 7, 5),
(12, 3, 1, 5, 2, 6),
(13, 3, 8, 3, 7, 4),
(14, 9, 6, 4, 9, 6),
(15, 8, 9, 4, 3, 4);

INSERT INTO Banca VALUES(1, 8, 6, 6, 2, 2, 22),
(2, 4, 3, 8, 2, 2, 24),
(3, 8, 8, 7, 4, 1, 22),
(4, 4, 6, 8, 4, 0, 8),
(5, 8, 5, 3, 6, 0, 23),
(6, 4, 7, 3, 6, 6, 23),
(7, 8, 4, 1, 4, 5, 13),
(8, 4, 3, 3, 4, 6, 19),
(9, 8, 10, 7, 9, 5, 24),
(10, 4, 9, 8, 10, 5, 18);

INSERT INTO Turno VALUES (1, 8, 1, 9, 8, 1),
(2, 4, 2, 4, 10, 10),
(3, 8, 3, 9, 1, 4),
(4, 4, 4, 2, 4, 7),
(5, 8, 5, 3, 6, 4),
(6, 4, 6, 6, 4, 7),
(7, 8, 7, 3, 3, 7),
(8, 4, 8, 6, 5, 6),
(9, 8, 9, 5, 10, 3),
(10, 4, 10, 3, 2, 6);

INSERT INTO Partida VALUES (1, 4, 8, 1, 4, 32, "2024-05-15 21:17:34"),
(2, 8, 4, 2, 8, 18, "2024-05-15 21:17:34"),
(3, 4, 8, 3, 4, 53, "2024-05-15 21:17:34"),
(4, 8, 4, 4, 8, 58, "2024-05-15 21:17:34"),
(5, 4, 8, 5, 4, 8, "2024-05-15 21:17:34"),
(6, 8, 4, 6, 4, 17, "2024-05-15 21:17:34"),
(7, 4, 8, 7, 4, 55, "2024-05-15 21:17:34"),
(8, 8, 4, 8, 8, 24, "2024-05-15 21:17:34"),
(9, 4, 8, 9, 8, 45, "2024-05-15 21:17:34"),
(10, 8, 4, 10, 4, 14, "2024-05-15 21:17:34");

INSERT INTO Precio VALUES (1, 93),
(2, 94),
(3, 91),
(4, 65),
(5, 57),
(6, 82),
(7, 62),
(8, 95),
(9, 69),
(10, 75),
(11, 62),
(12, 95),
(13, 77),
(14, 67);

INSERT INTO Monedas VALUES(1, 6, 691),
(2, 8, 902),
(3, 6, 861),
(4, 14, 694),
(5, 13, 977),
(6, 7, 920),
(7, 14, 612),
(8, 12, 740),
(9, 7, 528),
(10, 5, 676);

INSERT INTO Cristales VALUES(1, 6, 574),
(2, 4, 571),
(3, 6, 953),
(4, 9, 848),
(5, 4, 919),
(6, 11, 585),
(7, 13, 816),
(8, 2, 727),
(9, 6, 704),
(10, 5, 516);

INSERT INTO Creditos VALUES (1, 7, 854),
(2, 10, 989),
(3, 4, 633),
(4, 7, 733),
(5, 5, 649),
(6, 10, 554),
(7, 3, 784),
(8, 1, 820),
(9, 7, 564),
(10, 4, 904);

INSERT INTO Poke_carta VALUES(1, 8, 7),
(2, 10, 6),
(3, 9, 12),
(4, 2, 4),
(5, 8, 9),
(6, 9, 9),
(7, 3, 2),
(8, 2, 3),
(9, 5, 6),
(10, 8, 10);

INSERT INTO Entrena_carta VALUES (1, 1, 12),
(2, 2, 6),
(3, 9, 9),
(4, 3, 2),
(5, 8, 7),
(6, 3, 5),
(7, 2, 1),
(8, 8, 2),
(9, 2, 3),
(10, 10, 13);

INSERT INTO Energ_carta VALUES (1, 4, 12),
(2, 6, 4),
(3, 3, 8),
(4, 2, 3),
(5, 9, 10),
(6, 2, 14),
(7, 8, 13),
(8, 4, 4),
(9, 9, 8),
(10, 7, 5);

INSERT INTO Tienda_base VALUES(1, 7, 5, 5, 6, 7, 7),
(2, 2, 3, 2, 1, 10, 8),
(3, 4, 6, 6, 1, 7, 7),
(4, 7, 6, 8, 2, 9, 7),
(5, 5, 6, 3, 1, 4, 5),
(6, 10, 4, 6, 3, 1, 1),
(7, 5, 1, 5, 9, 5, 10),
(8, 1, 6, 8, 7, 4, 2),
(9, 10, 8, 8, 3, 5, 3),
(10, 9, 6, 2, 1, 10, 4);

INSERT INTO Pack_de_cartas VALUES (1, 1, 4, 7),
(2, 1, 10, 10),
(3, 3, 9, 5),
(4, 10, 4, 6),
(5, 7, 2, 10),
(6, 7, 10, 6),
(7, 3, 1, 9),
(8, 6, 6, 5),
(9, 2, 9, 5),
(10, 4, 4, 6);

INSERT INTO Pase VALUES (1, 1, 7, 854, 35),
(2, 2, 2, 942, 7),
(3, 3, 9, 812, 30),
(4, 4, 5, 524, 15),
(5, 5, 8, 827, 19),
(6, 6, 4, 754, 42),
(7, 7, 3, 788, 20),
(8, 8, 6, 986, 8),
(9, 9, 4, 520, 34),
(10, 10, 6, 953, 6);