-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientNumber" TEXT NOT NULL,
    "descriptionSale" TEXT NOT NULL,
    "dateSale" TEXT NOT NULL,
    "dateSend" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "statusSale" TEXT NOT NULL,
    "payFull" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_clientNumber_key" ON "Client"("clientNumber");
