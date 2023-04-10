interface IParams {
  slug: string;
}

export default async function Blog({ params }: { params: IParams }) {
  const { slug } = params;

  return <div>Post {slug}</div>;
}
