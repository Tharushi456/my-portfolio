function Header() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-pink-600">
        Hi, I’m Tharushi 👩‍💻
      </h1>
      <p className="text-xl text-gray-700 mb-6 max-w-xl">
        A passionate Computer Science undergraduate from the University of
        Westminster seeking an internship opportunity to apply and grow my
        skills.
      </p>
      <a
        href="#contact"
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-md transition"
      >
        Let’s Connect
      </a>
    </section>
  );
}

export default Header;
