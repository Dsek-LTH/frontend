INSERT INTO roles
    (name, is_current, mastery, term, description, max_people)
VALUES
    ("Källarmästare", true, "Källarmästeriet", "Kalenderår", "Bästa posten", 1),
    ("Sektionslivskvalitetsförhöjare", true, "Källarmästeriet", "Kalenderår", "Förhöjer sektionens livskvalitet", NULL),
    ("Vice Ordförande", true, "Presidiet", "Kalenderår", "Som ordförande fast visare", 1),
    ("Sexslav", false, "Sexmästeriet", "Kalenderår", "Slavade förr i sexet under nollningen", NULL),
    ("Karnevalsansvarig", true, "Programmästeriet", "Läsår", "Ser till att sektionens funktionärer blir upptagna på annat håll en termin vart fjärde år", 1);

INSERT INTO role_instances
    (role, user, start_date, end_date)
VALUES
    (0, "Mästare Källarsson", "2018-01-01", "2018-12-31"),
    (1, "Micro Manager", "2019-01-01", "2019-12-31"),
    (1, "Marie Kondo", "2019-01-01", "2019-12-31"),
    (3, "Arne Nyman", "2008-01-01", "2008-12-31");
