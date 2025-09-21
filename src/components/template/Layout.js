"use client"

import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { SearchPopup } from './SearchPopup';
import { CustomCursor } from './CustomCursor';
import { Loader } from './Loader';
import { BackToTop } from './BackToTop';
import { Footer } from './Footer';
import { useSidebar } from '@/hooks/useSidebar';
import { useSearchToggle } from '@/hooks/useSearchToggle';

export const Layout = ({ children, title, description, keywords }) => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();
  const { isSearchActive, openSearch, closeSearch } = useSearchToggle();

  return (
    <>
      <Loader>
        <div className="element-wrapper">
          <CustomCursor />
          
          <Header 
            onSearchClick={openSearch}
            onSidebarClick={openSidebar}
          />

          {/* Sidebar Overlay */}
          {isSidebarOpen && (
            <div 
              id="sidebar-overlay"
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeSidebar}
            />
          )}

          <Sidebar 
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
          />

          <SearchPopup 
            isActive={isSearchActive}
            onClose={closeSearch}
          />

          <div id="smooth-wrapper">
            <div id="smooth-content">
              <main>{children}</main>
              <Footer />
            </div>
          </div>

          <BackToTop />
        </div>
      </Loader>
    </>
  );
};