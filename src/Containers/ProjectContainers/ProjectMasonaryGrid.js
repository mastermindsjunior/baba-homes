import React, { useRef, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import imageNames from '../../imageNames';

const ProjectMasonryGrid = () => {
    const topPaginationContainerRef = useRef();

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const randomizedImageNames = shuffleArray(imageNames);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  // Calculate total pages
  const totalPages = Math.ceil(randomizedImageNames.length / imagesPerPage);

  // Get current page images
  const currentImages = randomizedImageNames.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const scrollToTop = () => {
    //   window.scrollTo({
    //     top: 200,
    //     behavior: 'smooth',
    //   });
    // topPaginationContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById('test').focus({preventScroll:false});
  };


  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    // scrollToTop();
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    // scrollToTop();
  };

  return (
    <div>
      {/* Pagination Controls */}
      <div ref={topPaginationContainerRef} style={styles.paginationContainer}>
        <button
        id='test'
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{
            ...styles.button,
            ...(currentPage === 1 ? styles.disabledButton : {}),
          }}
        >
          <img src="images/right-arrow.png" alt="leftarrow" style={{rotate:'180deg', height:'14px'}} />
        </button>
        <span style={styles.pageInfo}>
        {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{
            ...styles.button,
            ...(currentPage === totalPages ? styles.disabledButton : {}),
          }}
        >
          <img src="images/right-arrow.png" alt="rightarrow" style={{ height:'14px'}} />
        </button>
      </div>
    
    <div style={{minHeight:'500px'}}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {currentImages.map((name, i) => (
            <div style={{position:'relative', minHeight:'50px'}} className='masonry_img' key={i}>
            <div className='masonrySpinner'>
            <span class="loader"></span>
            </div>
            <img src={`images/projects/2024/${name}`}  loading='lazy' alt="projects" style={{zIndex:'5', position:'relative'}} />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
      {/* Pagination Controls
      <div style={styles.paginationContainer}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{
            ...styles.button,
            ...(currentPage === 1 ? styles.disabledButton : {}),
          }}
        >
          <img src="images/right-arrow.png" alt="leftarrow" style={{rotate:'180deg', height:'14px'}} />
        </button>
        <span style={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{
            ...styles.button,
            ...(currentPage === totalPages ? styles.disabledButton : {}),
          }}
        >
          <img src="images/right-arrow.png" alt="rightarrow" style={{ height:'14px'}} />
        </button>
      </div> */}
    </div>
  );
};

const styles = {
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
      marginBottom: '20px',
      gap: '10px',
    },
    button: {
      backgroundColor: '#01BEFE', // Light blue to contrast with dark background
      color: '#0D1821', // Dark text for better readability
      border: 'none',
      borderRadius: '5px',
      padding: '10px 15px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    disabledButton: {
      backgroundColor: '#4A4A4A', // Greyed-out button for disabled state
      color: '#999', // Light grey text
      cursor: 'not-allowed',
    },
    pageInfo: {
      color: '#FDCC04', // Yellow text for good contrast
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };

export default ProjectMasonryGrid;