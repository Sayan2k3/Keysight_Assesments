package com.example.bookmgmt.service;

import com.example.bookmgmt.model.Book;
import com.example.bookmgmt.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(long id) {
        return bookRepository.findById(id);
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public Book updateBook(long id, Book bookDetails) {
        Optional<Book> bookData = bookRepository.findById(id);

        if (bookData.isPresent()) {
            Book existingBook = bookData.get();
            existingBook.setTitle(bookDetails.getTitle());
            existingBook.setDescription(bookDetails.getDescription());
            existingBook.setPublishedYear(bookDetails.getPublishedYear());
            return bookRepository.save(existingBook);
        }
        return null;
    }

    public boolean deleteBook(long id) {
        if (bookRepository.existsById(id)) {
            bookRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public void deleteAllBooks() {
        bookRepository.deleteAll();
    }

    public List<Book> findByPublishedYear(int year) {
        return bookRepository.findByPublishedYear(year);
    }
}
