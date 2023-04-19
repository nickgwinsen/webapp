function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer>
            <p> Copyright &copy; M&N Software. {date} All Rights Reserved</p>
        </footer>
    );
}

export default Footer;