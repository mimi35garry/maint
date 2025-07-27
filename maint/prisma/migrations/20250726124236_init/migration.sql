-- CreateTable
CREATE TABLE "Materiel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reference" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "marque" TEXT NOT NULL,
    "lienDoc" TEXT NOT NULL,
    "personalisee" TEXT
);
