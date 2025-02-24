import { type NextRequest } from 'next/server';
import marketPlaces from '@/data/market-places.json';
import { DEFAULT_LIMIT, ICardDetail } from '@/common';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = +(searchParams?.get('limit') ?? DEFAULT_LIMIT);
  const offset = +(searchParams?.get('offset') ?? 0);
  const text = searchParams?.get('text') ?? '';
  const priceStart = +(searchParams?.get('priceStart') ?? 0);
  const priceEnd = +(searchParams?.get('priceEnd') ?? 1000);
  const tier = searchParams?.get('tier') ?? '';
  const category = searchParams?.get('category') ?? '';
  const theme = searchParams?.get('theme') ?? '';
  const time = searchParams?.get('time') ?? '';
  const price = searchParams?.get('price');

  const start = offset;
  const end = offset + limit;

  let data: ICardDetail[] = marketPlaces.products.filter((marketPlace) => {
    return (
      marketPlace.title.toLowerCase().includes(text.toLowerCase()) &&
      (tier ? marketPlace.tier.toLowerCase() === tier : true) &&
      (category ? marketPlace.category === category : true) &&
      (theme ? marketPlace.theme.toLowerCase() === theme : true) &&
      marketPlace.price >= priceStart &&
      marketPlace.price <= priceEnd
    );
  });

  if (time) {
    data = data.sort((prev, curr) => {
      if (time === 'oldest') {
        return prev.createdAt - curr.createdAt;
      }
      return curr.createdAt - prev.createdAt;
    });
  }

  if (price) {
    data = data.sort((prev, curr) => {
      if (price === 'low-to-high') {
        return prev.price - curr.price;
      }
      return curr.price - prev.price;
    });
  }

  const response = {
    total: data.length,
    data: data.slice(start, end) ?? [],
  };

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
}
