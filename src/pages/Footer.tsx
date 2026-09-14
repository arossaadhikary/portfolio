const Footer = () => {
    return (
        <footer className="text-white pt-10 text-center ">
            <hr className="opacity-25"></hr>
            <p className="text-sm mt-5 text-slate-300">&copy; {new Date().getFullYear()} Arossa Adhikary. All rights reserved.</p>
            <p className="text-xs mt-1 text-slate-300"><em>Last Updated: September 14th, 2026</em></p>
        </footer>
    );
};

export default Footer;