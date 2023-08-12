import { FacebookIcon, InstagramIcon, TwitterIcon } from '../Icons';

const ContactSection = () => {
  return (
    <section className="bg-blue-500 text-white p-4 flex justify-center">
      <div className="w-1/2 flex items-center justify-between">
        <span className="uppercase">Be in touch with us:</span>
        <form action="">
          <input type="text" placeholder="Enter your e-mail" className="p-3 rounded-l-md" />
          <input type="submit" name="" id="" className="p-3 text-white bg-gray-800 rounded-r-md" />
        </form>
        <div className="flex gap-3">
          <div>
            <FacebookIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
          <div>
            <TwitterIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
