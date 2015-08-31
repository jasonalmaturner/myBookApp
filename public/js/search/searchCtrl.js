var app = angular.module('myBookApp');

app.controller('searchCtrl', function($scope, searchService) {
	$scope.searchEntry = "Ender's Game";
	$scope.months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];


	$scope.getSearchResults = function() {
		searchService.searchBooks($scope.searchEntry)
		.then(function(res) {
			//console.log("console.log(res): " + res);
			//console.log("console.log(res.data): " + res.data);

			console.log('$scope.searchEntry = ' + $scope.searchEntry);

			$scope.searchBooks = res;

			// $scope.searchResults = {
			// 		  "GoodreadsResponse": {
			// 		    "Request": {
			// 		      "authentication": "true",
			// 		      "key": "AvRM2Oj3HaHd0lch5lWwQ",
			// 		      "method": "search_index"
			// 		    },
			// 		    "search": {
			// 		      "query": "Ender's Game",
			// 		      "results-start": "1",
			// 		      "results-end": "20",
			// 		      "total-results": "386",
			// 		      "source": "Goodreads",
			// 		      "query-time-seconds": "0.65",
			// 		      "results": {
			// 		        "work": [
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "2422333"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "207"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "692144"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "33086"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "1985"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "-nil": "true"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "-nil": "true"
			// 		            },
			// 		            "average_rating": "4.28",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "375802"
			// 		              },
			// 		              "title": "Ender's Game (The Ender Quintet, #1)",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "589"
			// 		                },
			// 		                "name": "Orson Scott Card"
			// 		              },
			// 		              "image_url": "https://d.gr-assets.com/books/1408303130m/375802.jpg",
			// 		              "small_image_url": "https://d.gr-assets.com/books/1408303130s/375802.jpg"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "938064"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "53"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "62028"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "463"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "1984"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "12"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "-nil": "true"
			// 		            },
			// 		            "average_rating": "4.15",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "44687"
			// 		              },
			// 		              "title": "Enchanters' End Game (The Belgariad, #5)",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "8732"
			// 		                },
			// 		                "name": "David Eddings"
			// 		              },
			// 		              "image_url": "https://d.gr-assets.com/books/1217735909m/44687.jpg",
			// 		              "small_image_url": "https://d.gr-assets.com/books/1217735909s/44687.jpg"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "42437887"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "1"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "23"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "11"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2015"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "9"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "8"
			// 		            },
			// 		            "average_rating": "3.43",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "22874150"
			// 		              },
			// 		              "title": "The End Game",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "6876994"
			// 		                },
			// 		                "name": "Kate  McCarthy"
			// 		              },
			// 		              "image_url": "https://d.gr-assets.com/books/1423089153m/22874150.jpg",
			// 		              "small_image_url": "https://d.gr-assets.com/books/1423089153s/22874150.jpg"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "11571577"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "1"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "1073"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "44"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2010"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "4"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "30"
			// 		            },
			// 		            "average_rating": "4.15",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "8782597"
			// 		              },
			// 		              "title": "Ender's Game",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "2940867"
			// 		                },
			// 		                "name": "Frederic P.  Miller"
			// 		              },
			// 		              "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
			// 		              "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "6581562"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "4"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "27985"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "176"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2009"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "-nil": "true"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "-nil": "true"
			// 		            },
			// 		            "average_rating": "4.36",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "6393082"
			// 		              },
			// 		              "title": "Ender's Game, Volume 1: Battle School (Ender's Saga)",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "38491"
			// 		                },
			// 		                "name": "Christopher Yost"
			// 		              },
			// 		              "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
			// 		              "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "12530"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "3"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "1544"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "55"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2002"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "9"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "16"
			// 		            },
			// 		            "average_rating": "4.47",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "9735"
			// 		              },
			// 		              "title": "Ender's Game Boxed Set: Ender's Game, Ender's Shadow, Shadow of the Hegemon",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "589"
			// 		                },
			// 		                "name": "Orson Scott Card"
			// 		              },
			// 		              "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
			// 		              "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "7272274"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "2"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "7844"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "43"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2010"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "3"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "24"
			// 		            },
			// 		            "average_rating": "4.59",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "7025086"
			// 		              },
			// 		              "title": "Ender's Game, Volume 2: Command School",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "38491"
			// 		                },
			// 		                "name": "Christopher Yost"
			// 		              },
			// 		              "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
			// 		              "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "26334506"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "1"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "936"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "54"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2013"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "9"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "17"
			// 		            },
			// 		            "average_rating": "4.27",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "18591023"
			// 		              },
			// 		              "title": "Enders Game Boxed Set",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "589"
			// 		                },
			// 		                "name": "Orson Scott Card"
			// 		              },
			// 		              "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
			// 		              "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "17050695"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "3"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "517"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "56"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2010"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "3"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "10"
			// 		            },
			// 		            "average_rating": "4.11",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "12082688"
			// 		              },
			// 		              "title": "Ender's Game Ultimate Collection",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "38491"
			// 		                },
			// 		                "name": "Christopher Yost"
			// 		              },
			// 		              "image_url": "https://d.gr-assets.com/books/1372911791m/12082688.jpg",
			// 		              "small_image_url": "https://d.gr-assets.com/books/1372911791s/12082688.jpg"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "40179821"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "2"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "435"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "61"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2014"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "1"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "30"
			// 		            },
			// 		            "average_rating": "4.17",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "20829088"
			// 		              },
			// 		              "title": "His End Game",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "7857834"
			// 		                },
			// 		                "name": "R.B. Hilliard"
			// 		              },
			// 		              "image_url": "https://d.gr-assets.com/books/1393774525m/20829088.jpg",
			// 		              "small_image_url": "https://d.gr-assets.com/books/1393774525s/20829088.jpg"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "40880256"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "2"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "163"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "13"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2014"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "3"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "22"
			// 		            },
			// 		            "average_rating": "3.52",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "21545825"
			// 		              },
			// 		              "title": "End Game",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "8081215"
			// 		                },
			// 		                "name": "Tabatha Wenzel"
			// 		              },
			// 		              "image_url": "https://d.gr-assets.com/books/1395703564m/21545825.jpg",
			// 		              "small_image_url": "https://d.gr-assets.com/books/1395703564s/21545825.jpg"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "14970257"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "9"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "142"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "25"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2010"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "12"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "25"
			// 		            },
			// 		            "average_rating": "3.73",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "10073669"
			// 		              },
			// 		              "title": "End Game",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "512936"
			// 		                },
			// 		                "name": "Matthew Glass"
			// 		              },
			// 		              "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
			// 		              "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "18279699"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "2"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "131"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "12"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2011"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "12"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "13"
			// 		            },
			// 		            "average_rating": "3.48",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "13106605"
			// 		              },
			// 		              "title": "The End Game",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "2726790"
			// 		                },
			// 		                "name": "Lisa Marie Davis"
			// 		              },
			// 		              "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
			// 		              "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "10523104"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "3"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "443"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "23"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2009"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "12"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "9"
			// 		            },
			// 		            "average_rating": "3.93",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "7734468"
			// 		              },
			// 		              "title": "Ender's Game: War of Gifts",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "236462"
			// 		                },
			// 		                "name": "Jake Black"
			// 		              },
			// 		              "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
			// 		              "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "44223038"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "6"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "43"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "7"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2015"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "9"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "15"
			// 		            },
			// 		            "average_rating": "4.47",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "24611928"
			// 		              },
			// 		              "title": "The End Game  (A Brit in the FBI, #3)",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "1239"
			// 		                },
			// 		                "name": "Catherine Coulter"
			// 		              },
			// 		              "image_url": "https://d.gr-assets.com/books/1425319746m/24611928.jpg",
			// 		              "small_image_url": "https://d.gr-assets.com/books/1425319746s/24611928.jpg"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "7996"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "18"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "275"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "8"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2006"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "10"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "31"
			// 		            },
			// 		            "average_rating": "3.85",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "4326"
			// 		              },
			// 		              "title": "End Game (Dreamland, #8)",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "2989"
			// 		                },
			// 		                "name": "Dale Brown"
			// 		              },
			// 		              "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
			// 		              "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "26343184"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "6"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "579"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "61"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2014"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "6"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "24"
			// 		            },
			// 		            "average_rating": "4.07",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "18596481"
			// 		              },
			// 		              "title": "End Game (Jonathan Grave #6)",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "181831"
			// 		                },
			// 		                "name": "John Gilstrap"
			// 		              },
			// 		              "image_url": "https://d.gr-assets.com/books/1389598387m/18596481.jpg",
			// 		              "small_image_url": "https://d.gr-assets.com/books/1389598387s/18596481.jpg"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "44970211"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "2"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "15"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "5"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2015"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "4"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "9"
			// 		            },
			// 		            "average_rating": "2.87",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "25249440"
			// 		              },
			// 		              "title": "End Game",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "116897"
			// 		                },
			// 		                "name": "Alan Gibbons"
			// 		              },
			// 		              "image_url": "https://d.gr-assets.com/books/1427717851m/25249440.jpg",
			// 		              "small_image_url": "https://d.gr-assets.com/books/1427717851s/25249440.jpg"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "40151441"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "3"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "52"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "10"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2014"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "12"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "15"
			// 		            },
			// 		            "average_rating": "4.33",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "23798942"
			// 		              },
			// 		              "title": "End Game (Mindhunters, #6)",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "5133851"
			// 		                },
			// 		                "name": "Anne Marie Becker"
			// 		              },
			// 		              "image_url": "https://d.gr-assets.com/books/1418454663m/23798942.jpg",
			// 		              "small_image_url": "https://d.gr-assets.com/books/1418454663s/23798942.jpg"
			// 		            }
			// 		          },
			// 		          {
			// 		            "id": {
			// 		              "-type": "integer",
			// 		              "#text": "27273239"
			// 		            },
			// 		            "books_count": {
			// 		              "-type": "integer",
			// 		              "#text": "2"
			// 		            },
			// 		            "ratings_count": {
			// 		              "-type": "integer",
			// 		              "#text": "61"
			// 		            },
			// 		            "text_reviews_count": {
			// 		              "-type": "integer",
			// 		              "#text": "10"
			// 		            },
			// 		            "original_publication_year": {
			// 		              "-type": "integer",
			// 		              "#text": "2013"
			// 		            },
			// 		            "original_publication_month": {
			// 		              "-type": "integer",
			// 		              "#text": "11"
			// 		            },
			// 		            "original_publication_day": {
			// 		              "-type": "integer",
			// 		              "#text": "25"
			// 		            },
			// 		            "average_rating": "4.07",
			// 		            "best_book": {
			// 		              "-type": "Book",
			// 		              "id": {
			// 		                "-type": "integer",
			// 		                "#text": "19228388"
			// 		              },
			// 		              "title": "The Irish End Game Series, Books 1-3 (The Irish End Game)",
			// 		              "author": {
			// 		                "id": {
			// 		                  "-type": "integer",
			// 		                  "#text": "451383"
			// 		                },
			// 		                "name": "Susan Kiernan-Lewis"
			// 		              },
			// 		              "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
			// 		              "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png"
			// 		            }
			// 		          }
			// 		        ]
			// 		      }
			// 		    }
			// 		  }
			// 		}
			// 
			// $scope.searchBooks = $scope.searchResults.GoodreadsResponse.search.results.work;



//			CONSOLE.LOG Notes for returning JSON.
//
			// console.log($scope.searchBooks)

			// for (var i = 0; i < $scope.searchBooks.length; i++) {
			// 	console.log(i + ": " + $scope.searchBooks[i].best_book[0].title[0]);
			// };

			// console.log($scope.searchResults);
			// console.log($scope.searchBooks[0]);
 		});
	}
});