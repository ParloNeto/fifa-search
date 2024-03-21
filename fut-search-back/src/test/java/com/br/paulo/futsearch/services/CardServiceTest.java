package com.br.paulo.futsearch.services;

import com.br.paulo.futsearch.data.v1.CardVO;
import com.br.paulo.futsearch.domain.Card;
import com.br.paulo.futsearch.repository.CardRepository;
import com.br.paulo.futsearch.services.exception.RequiredObjectIsNullException;
import com.br.paulo.futsearch.services.exception.ResourceNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CardServiceTest {

    @InjectMocks
    private CardService cardService;

    @Mock
    private CardRepository cardRepository;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindAll() {
        // Arrange
        Card card = new Card();
        when(cardRepository.findAll()).thenReturn(Arrays.asList(card));

        // Act
        List<CardVO> result = cardService.findAll();

        // Assert
        assertEquals(1, result.size());
        verify(cardRepository, times(1)).findAll();
    }

    @Test
    public void testFindById() {
        // Arrange
        String id = "1";
        Card card = new Card();
        when(cardRepository.findById(id)).thenReturn(Optional.of(card));

        // Act
        CardVO result = cardService.findById(id);

        // Assert
        assertNotNull(result);
        verify(cardRepository, times(1)).findById(id);
    }

    @Test
    public void testFindById_NotFound() {
        // Arrange
        String id = "1";
        when(cardRepository.findById(id)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> cardService.findById(id));
        verify(cardRepository, times(1)).findById(id);
    }

    @Test
    public void testCreate() {
        // Arrange
        CardVO cardVO = new CardVO();
        Card card = new Card();
        when(cardRepository.save(any(Card.class))).thenReturn(card);

        // Act
        CardVO result = cardService.create(cardVO);

        // Assert
        assertNotNull(result);
        verify(cardRepository, times(1)).save(any(Card.class));
    }

    @Test
    public void testCreate_NullCard() {
        // Act & Assert
        assertThrows(RequiredObjectIsNullException.class, () -> cardService.create(null));
        verify(cardRepository, times(0)).save(any(Card.class));
    }

// Similar tests can be written for delete and update methods
}