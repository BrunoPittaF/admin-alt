-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "clientNumber" TEXT NOT NULL,
    "descriptionSale" TEXT NOT NULL,
    "dateSale" TEXT NOT NULL,
    "dateSend" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "statusSale" TEXT NOT NULL,
    "payFull" BOOLEAN NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_clientNumber_key" ON "Client"("clientNumber");
