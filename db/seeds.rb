# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
Seller.create(name: 'John Spencer', rating: 97)
Seller.create(name: 'Whitney Sklaver', rating: 82)
Seller.create(name: 'Jackson Howe', rating: 62)
Seller.create(name: 'Benji Attison', rating: 99)
Seller.create(name: 'Farrah Nezhad', rating: 87)
Seller.create(name: 'Denson Grover', rating: 92)
Seller.create(name: 'Fatima White', rating: 86)


User.create(name: 'Solomon Leonard', rating: 97)
User.create(name: 'Scott Bauer', rating: 82)
User.create(name: 'Jamya Decker', rating: 62)
User.create(name: 'Andreas Mayer', rating: 99)
User.create(name: 'Ibrahim Cannon', rating: 87)
User.create(name: 'Alan Gibson', rating: 92)
User.create(name: 'Malik Reeves', rating: 86)

Item.create(
    name: 'Technics SL-1200MK2 Turntable Pair',
    price: 2250.00,
    image:'https://i.ebayimg.com/images/g/zukAAOSwiupiz~Ll/s-l500.png',
    description:'The quintessential vintage DJ turntables, used and in perfect working and cosmetic condition.',
    user_id: 1,
    seller_id: 3
)
Item.create(
    name: 'Pelican Kayak',
    price: 250.00,
    image:'https://i.ebayimg.com/images/g/mL4AAOSwYEJiwEOZ/s-l500.jpg',
    description:'Excellent 10ft Pelican Bandit 100 NKT Kayak, electric blue color, lightweight yet heavy duty, been on three or four trips only, in great condition',
    user_id: 2,
    seller_id: 4
)
Item.create(
    name: 'Antique Singer Sewing Machine',
    price: 290.00,
    image:'https://i.ebayimg.com/images/g/100AAOSw3itjAGn1/s-l500.jpg',
    description:'Singer Model 66 Red Eye Hand Crank Sewing Machine. Late 1800s model in good working condition, sewing machine only, has no table.',
    user_id: 3,
    seller_id: 1
)
Item.create(
    name: '1958 Gibson Les Paul Guitar',
    price: 250000.00,
    image:'https://images.reverb.com/image/upload/s--uWzA3jNM--/f_auto,t_large/v1642470242/iiiwonxrrmzqfjsdjujy.jpg',
    description:'This 1958 Gibson Les Paul Standard Sunburst Serial number 8 5438 was made in the Kalamazoo, MI factory in 1958. Has had some minor work done. This is your chance to own a piece of history.',
    user_id: 4,
    seller_id: 2
)
Item.create(
    name: 'Herman Miller Eames Lounge Chair',
    price: 1500.00,
    image:'https://i.ebayimg.com/images/g/f1IAAOSwtx9i3YDo/s-l500.png',
    description:'2006 Herman Miller Eames lounge chair, mid century modern style with ottoman in black leather and walnut wood. Some minor cracks in leather in the seat area',
    user_id: 5,
    seller_id: 5
)
Item.create(
    name: 'Tommy Bahama Beach Umbrella',
    price: 40.00,
    image:'https://i.ebayimg.com/images/g/71sAAOSwsfJiQ3N7/s-l500.jpg',
    description:'Tommy Bahama stylish 8ft diameter blue beach umbrella with fiberglass ribs that you screw into the sand to keep sturdy. Works great!!',
    user_id: 6,
    seller_id: 7
)
Item.create(
    name: 'Lost Hydra Surfboard',
    price: 250.00,
    image:'https://i.ebayimg.com/images/g/~a4AAOSwLX5jAmxw/s-l500.jpg',
    description:'Lost Hydra Surfboard, like new, couple foot dents, no major damage.',
    user_id: 7,
    seller_id: 6
)
Item.create(
    name: 'Apple Airpods 2nd Gen',
    price: 50.00,
    image:'https://i.ebayimg.com/images/g/WjsAAOSwDsJi3jck/s-l500.jpg',
    description:'Apple AirPods 2nd generation bluetooth earbuds, earphones with headset & charging case. Has been tested for sound quality and is working perfectly.',
    user_id: 1,
    seller_id: 3
)