import prisma from '@/db/db';

export async function GET() {
  const clients = await prisma.client.findMany();
  return Response.json(clients)
}

export async function POST(req: Request) {
  const { id, clientNumber, descriptionSale, dateSale, dateSend, price, statusSale, payFull } = await req.json();

  try {
    if (id) {
      const client = await prisma.client.update({
        where: {
          id
        },
        data: {
          clientNumber,
          descriptionSale,
          dateSale,
          dateSend,
          price,
          statusSale,
          payFull
        }
      });
      return Response.json({ message: "OK", client })
    } else {
      let localPayFull;
      payFull ? localPayFull = true : localPayFull = false;
      const client = await prisma.client.create({
        data: {
          clientNumber,
          descriptionSale,
          dateSale,
          dateSend,
          price,
          statusSale,
          payFull: localPayFull
        }
      });
      return Response.json({ message: "OK", client })
    }

  } catch (error) {
    return Response.json({ message: error })
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  try {
    const client = await prisma.client.delete({
      where: {
        id
      }
    });

    if (client) return Response.json({ message: 'Cliente deletado', client })
  } catch (error) {
    return Response.json({ message: error })
  }
}

// export async function PUT(req: Request) {
//   const { id, clientNumber, descriptionSale, dateSale, dateSend, price, statusSale, payFull } = await req.json();

//   try {
//     const client = await prisma.client.update({
//       where: {
//         id
//       },
//       data: {
//         clientNumber,
//         descriptionSale,
//         dateSale,
//         dateSend,
//         price,
//         statusSale,
//         payFull
//       }
//     });
//     return Response.json({ message: "OK", client })
//   } catch (error) {
//     return Response.json({ message: error })
//   }
// }