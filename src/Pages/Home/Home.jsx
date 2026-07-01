import React, { useEffect, useState } from 'react';
import Navbar from '../../UIComponents/Navbar/Navbar';
import Card from '../../UIComponents/Card/Card';
import {getImages} from '../../Services/Services';
import Footer from '../../UIComponents/Footer/Footer';
import Pagination from '../../UIComponents/Pagination/Pagination';
import './Home.css'


const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 8;

  useEffect(() => {
    getImages(search)
      .then((images) => {
        setData(images);
        setCurrentPage(1);
      })
      .catch((err) => console.log(err));
  }, [search]);

  const totalPage = Math.ceil(data.length / recordsPerPage);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  const currentRecords = data.slice(startIndex, endIndex);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar
        setSearch={setSearch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="gallery">
        {currentRecords.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer/>
    </div>
  );
};

export default Home;