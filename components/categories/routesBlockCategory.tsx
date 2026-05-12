import Link from "next/link";

const RoutesBlockCategory = () => {

  type TCategory = {
    id: number,
    name: string,
    link: string
  }

  const categories: TCategory[] = [
    { id: 1, name: "درام", link: "/" },
    { id: 2, name: "جنایی", link: "/" },
    { id: 3, name: "طنز", link: "/" },
    { id: 4, name: "ترسناک", link: "/" },
    { id: 5, name: "خانوادگی", link: "/" },
    { id: 6, name: "تاریخی", link: "/" },
    { id: 7, name: "اکشن", link: "/" },
    { id: 8, name: "اکشن", link: "/" },
    { id: 9, name: "اکشن", link: "/" },
    { id: 10, name: "اکشن", link: "/" },
  ];

  return (
    <div>
      <div className="flex flex-row justify-around rounded-lg bg-black p-4 mx-4">
        {categories.map((category) => (
          <Link className="px-4" key={category.id} href={category.link}>
            <h4 className="text-sm">{category.name}</h4>
          </Link>
        ))}
      </div>
      <div className="px-5 py-4">
        <p className="text-themecolor text-center">انواع فیلم های داخلی و خارجی جنایی با کیفیت عالی همرا با تماشای آنلاین</p>
      </div>
    </div>
  );
}
 
export default RoutesBlockCategory;