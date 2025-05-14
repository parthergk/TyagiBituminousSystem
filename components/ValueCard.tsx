interface Prop{
    title: string
    description: string
    icon: React.ReactNode

}
const ValueCard = ({ title, description, icon }: Prop) => {
  return (
    <div className="flex flex-col md:flex-row items-start p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 cursor-pointer">
      <div className="mr-4 text-primary mb-3 md:mb-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;