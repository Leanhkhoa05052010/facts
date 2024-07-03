const facts = [
    { fact:"Một số loài nhện có thể quay tơ dai hơn thép 5 lần.",explanation:"Nhện tạo ra một loại tơ cực kỳ chắc chắn và linh hoạt, gấp nhiều lần thép."},
    { fact:"Tê tê là loài động vật có vú duy nhất có vảy.",explanation:"Vảy của tê tê được làm từ keratin, giống như móng tay của con người."},
    { fact:"Chim ruồi có thể bay lùi.",explanation:"Chim ruồi có cấu trúc cánh độc đáo cho phép chúng bay theo mọi hướng."},
    { fact:"Mật ong không bao giờ hỏng.",explanation:"Mật ong là một trong số ít các thực phẩm không bao giờ hỏng nếu được bảo quản đúng cách. Người ta đã tìm thấy mật ong trong các ngôi mộ cổ Ai Cập và nó vẫn ăn được."},
    { fact:"Cá ngựa là loài duy nhất mà con đực mang thai",explanation:"Ở loài cá ngựa, con đực mới là cá thể mang thai và sinh con, thay vì con cái như ở hầu hết các loài khác"},
    { fact:"Ngón tay người nhăn lại khi tiếp xúc với nước không phải là do hút ẩm",explanation:"Ngón tay nhăn để cải thiện độ bám khi ở trong môi trường ẩm ướt, đây là một phản xạ của hệ thần kinh ."},
    { fact:"Loài mực khổng lồ có mắt to nhất trong thế giới động vật",explanation:"Mắt của mực khổng lồ có đường kính lên tới 30 cm, giúp chúng có thể nhìn rõ trong môi trường biển sâu tối tăm."},
    { fact:"Có một loài sứa bất tử",explanation:"Turritopsis dohrnii, còn được gọi là “sứa bất tử” , có khả năng trở lại giai đoạn trưởng thành từ trạng thái trưởng thành, điều này giúp nó có thể sống lâu hơn nhiều so với các loài động vật khác."},
    { fact:"Chữ cái “E” là chữ cái phổ biến nhất trong tiếng Anh",explanation:"“E” là chữ cái được sử dụng nhiều nhất trong tiếng Anh với tần số xuất hiện lên tới 12.7% theo nghiên cứu của các nhà khoa học. 20 từ được viết nhiều nhất trong tiếng Anh cũng đều có chứa “E”."},
    { fact:"Cá voi xanh là động vật lớn nhất từng tồn tại trên Trái Đất",explanation:" Một con cá voi xanh trưởng thành có thể dài đến 30 mét và nặng hơn 180 tấn."},
    { fact:"Cá ngựa cặp đôi suốt đời và thực hiện “vũ điệu”  mỗi sáng",explanation:" Để củng cố mối quan hệ, cá ngựa giao tiếp và thực hiện các màn “vũ điệu” hàng ngày."},
    { fact:"Tổ tiên của lạc đà từng sống ở Bắc Mỹ",explanation:" Lạc đà ngày nay có nguồn gốc từ Bắc Mỹ trước khi di cư đến châu Á và châu Phi."},
    { fact:"Mực ống phát sáng trong bóng tối",explanation:" Một số loài mực phát sáng nhờ cơ chế phát quang sinh học, giúp chúng ngụy trang hoặc giao tiếp."},
    { fact:"Có nhiều ngôi sao trong vũ trụ hơn cả hạt cát trên tất cả các bãi biển trên Trái Đất",explanation:" Các nhà khoa học ước tính có khoảng 10^24 ngôi sao trong vũ trụ."},
    { fact:"Chim cánh cụt đực sẽ tặng đá cho chim cánh cụt cái để cầu hôn",explanation:" Những viên đá này giúp chim cánh cụt cái xây tổ."},
    { fact:"Thời gian trung bình để nhấp mắt là 1/10 giây",explanation:" Nhấp mắt giúp giữ ẩm cho mắt và bảo vệ khỏi bụi bẩn."},
    { fact:"Dơi là loài động vật có vú duy nhất biết bay thật sự",explanation:" Mặc dù các loài khác như sóc bay có thể trượt dài, nhưng chỉ có dơi thực sự bay được."},
    { fact:"Nhện có thể làm ra các loại tơ khác nhau cho các mục đích khác nhau",explanation:" Nhện tạo ra tơ dính để bắt mồi, tơ bền để xây tổ và tơ mềm để bao bọc trứng."},
    { fact:"Tất cả con nhím biển có khả năng tái sinh phần cơ thể bị mất",explanation:" Điều này bao gồm chân và thậm chí cả phần miệng."},
    { fact:"Cá dĩa sử dụng tiếng kêu để giao tiếp",explanation:" Chúng tạo ra âm thanh bằng cách đập nhanh hai bộ phận cơ thể với nhau."},
    { fact:"Tim của tôm hùm nằm trong đầu",explanation:" Cụ thể là trong phần ngực gần đầu."},
    { fact:"Gấu koala có dấu vân tay giống con người đến mức có thể nhầm lẫn khi điều tra hiện trường tội phạm",explanation:" Điều này có thể gây khó khăn cho việc phân biệt chúng với dấu vân tay con người."},
    { fact:"Số lượng tế bào vi khuẩn trong cơ thể người nhiều hơn số lượng tế bào của chính cơ thể người",explanation:" Tỷ lệ này có thể lên đến 1,3:1, tức là có khoảng 39 nghìn tỷ tế bào vi khuẩn so với 30 nghìn tỷ tế bào con người."},
    { fact:"Sứa có thể ngủ",explanation:" Nghiên cứu gần đây cho thấy một số loài sứa có các giai đoạn ngủ."},
    { fact:"Trái đất quay chậm lại theo thời gian",explanation:" Nguyên nhân là do ảnh hưởng của lực hấp dẫn của Mặt Trăng."},
    { fact:"Kính hiển vi điện tử có thể phóng đại mẫu vật lên tới 10 triệu lần",explanation:" Điều này cho phép các nhà khoa học quan sát các chi tiết nhỏ nhất ở cấp độ nguyên tử."},
    { fact:"Mèo không thể nếm được vị ngọt",explanation:" Điều này là do chúng thiếu một protein cần thiết để nhận biết vị ngọt."},
    { fact:"Loài voi có thể nhận biết khi một con người sắp chết",explanation:" Chúng thể hiện sự buồn bã và thậm chí có thể đứng canh bên cạnh cơ thể của người đã chết."},
    { fact:"Người ta ước tính rằng bộ não con người có thể lưu trữ lượng thông tin tương đương với 2.5 triệu gigabyte",explanation:" Đây là một con số khổng lồ nếu so sánh với dung lượng lưu trữ của các thiết bị điện tử."},
    { fact:"Sứa bất tử có thể đảo ngược quá trình lão hóa",explanation:" Turritopsis dohrnii có khả năng quay trở lại giai đoạn polyp sau khi đạt đến trạng thái trưởng thành."},
    { fact:"Có một lượng lớn vàng trong nước biển, nhưng việc chiết xuất không khả thi về mặt kinh tế",explanation:" Tổng lượng vàng ước tính lên đến hàng tỷ tấn."},
    { fact:"Băng ở Greenland đang tan chảy nhanh gấp đôi so với dự đoán trước đây",explanation:" Nguyên nhân chính là do biến đổi khí hậu."},
    { fact:"Trái Đất đã trải qua ít nhất năm lần tuyệt chủng hàng loạt",explanation:" Lần tuyệt chủng gần đây nhất là sự kiện tuyệt chủng kỷ Phấn trắng-Paleogen, đã xóa sổ các loài khủng long."},
    { fact:"Trong không gian, nước có thể tạo thành các quả cầu trôi nổi do không có trọng lực",explanation:" Điều này đã được quan sát trong các thí nghiệm trên Trạm Vũ trụ Quốc tế (ISS)."},
    { fact:"Động vật có thể cảm nhận được động đất trước khi con người nhận ra",explanation:" Chúng cảm nhận được sóng địa chấn sơ cấp (P-waves) trước khi sóng thứ cấp (S-waves) gây ra thiệt hại đến."},
    { fact:"Sâu bướm biến thành bướm bằng cách hòa tan toàn bộ cơ thể trong cái kén",explanation:" Các tế bào của sâu bướm tái tổ chức để tạo thành bướm."},
    { fact:"Tất cả các nguyên tố trên Trái Đất, ngoại trừ hydro, được hình thành từ các vụ nổ siêu tân tinh (supernovae)",explanation:" Điều này có nghĩa là chúng ta đều là sản phẩm của các ngôi sao chết."},
    { fact:"Vết thương trên da người tái tạo từ trong ra ngoài",explanation:" Các tế bào da mới di chuyển từ rìa vết thương về phía trung tâm."},
    { fact:"Cá vàng có thể nhớ những điều trong ít nhất ba tháng",explanation:" Điều này bác bỏ quan niệm phổ biến rằng cá vàng chỉ nhớ được vài giây."},
    { fact:"Một con bạch tuộc có ba trái tim",explanation:" Hai trái tim bơm máu đến mang và một trái tim bơm máu đến các phần còn lại của cơ thể."},
    { fact:"Chim Kiwi có trứng lớn nhất so với kích thước cơ thể trong thế giới chim",explanation:" Trứng của chim Kiwi chiếm khoảng 20% trọng lượng cơ thể của nó."},
    { fact:"Thời gian mà một ngày trên Sao Hỏa dài hơn trên Trái Đất",explanation:" Một ngày trên Sao Hỏa kéo dài khoảng 24 giờ 39 phút."},
    { fact:"Hơn 99% khối lượng của hệ Mặt Trời nằm trong Mặt Trời",explanation:" Điều này có nghĩa là các hành tinh và các vật thể khác chỉ chiếm một phần rất nhỏ."},
    { fact:"Ngựa có thể ngủ đứng hoặc nằm",explanation:" Chúng có hệ thống cơ sinh học cho phép chúng khóa chân để ngủ đứng mà không bị ngã."},
    { fact:"Sóng âm không thể truyền qua chân không",explanation:" Điều này là do sóng âm cần một môi trường vật chất để truyền."},
    { fact:"Cơ thể người phát ra một lượng nhỏ bức xạ hồng ngoại",explanation:" Đây là một dạng nhiệt mà cơ thể phát ra."},
    { fact:"Loài rùa có thể thở qua hậu môn",explanation:" Một số loài rùa có khả năng hấp thụ oxy qua một màng trong hậu môn của chúng."},
    { fact:"Một con chuột có thể bơi trong 3 ngày liên tục",explanation:" Điều này cho thấy khả năng chịu đựng và sinh tồn cao của loài chuột."},
    { fact:"Băng ở Bắc Cực không có nước ngọt",explanation:" Băng ở Bắc Cực chủ yếu là nước mặn, còn băng ở Nam Cực chủ yếu là nước ngọt."},
    { fact:"Hệ Mặt Trời di chuyển qua không gian với tốc độ khoảng 828,000 km/h",explanation:" Tất cả các hành tinh trong hệ Mặt Trời cũng di chuyển cùng tốc độ này quanh tâm của Dải Ngân Hà."},
    { fact:"Cá voi có bài hát riêng biệt và thay đổi theo thời gian",explanation:" Những bài hát này có thể kéo dài nhiều giờ và được truyền từ con cá voi này sang con cá voi khác."},
    { fact:"Một con người có thể sống sót trong không gian mà không có bộ đồ vũ trụ trong khoảng 15 giây",explanation:" Sau đó, họ sẽ mất ý thức do thiếu oxy và áp suất."},
    { fact:"Cá mập có thể phát hiện từ trường của Trái Đất",explanation:" Điều này giúp chúng điều hướng và săn mồi."},
    { fact:"Loài chim cánh cụt có lớp dầu tự nhiên trên lông để chống nước và giữ ấm",explanation:" Điều này giúp chúng sống sót trong môi trường lạnh giá của Nam Cực."},
    { fact:"Sông Nile là con sông dài nhất thế giới, dài khoảng 6,650 km",explanation:" Nó chảy qua 11 quốc gia ở châu Phi."},
    { fact:"Có nhiều loại vi khuẩn trên bàn phím máy tính hơn so với bồn cầu",explanation:" Điều này là do việc tiếp xúc liên tục và vệ sinh không đúng cách."},
    { fact:"Những loài chim biển có thể uống nước biển nhờ có các tuyến muối đặc biệt để lọc muối",explanation:" Điều này giúp chúng sống sót ở các vùng biển mà không cần nguồn nước ngọt."},
    { fact:"Cá hồi di cư hàng ngàn km để trở về nơi chúng sinh ra để đẻ trứng",explanation:" Chúng sử dụng khứu giác mạnh mẽ để định hướng trở về."},
    { fact:"Mắt của cá tầm có thể điều chỉnh để nhìn rõ dưới nước và trên cạn",explanation:" Điều này giúp chúng sống sót trong môi trường thay đổi."},
    { fact:"Tế bào da người tái tạo hoàn toàn mỗi 27 ngày",explanation:" Lớp biểu bì của da liên tục được thay thế."},
    { fact:"Chim cú mèo không thể quay đầu hoàn toàn 360 độ, nhưng chúng có thể quay đầu tới 270 độ",explanation:" Điều này giúp chúng quan sát xung quanh mà không cần di chuyển cơ thể."},
    { fact:"Có một số loài cá có thể sống sót và bơi trong nước ngọt và nước mặn",explanation:" Chúng được gọi là cá lưỡng cư, ví dụ như cá hồi và cá chẽm."},
    { fact:"Con người có thể phát hiện khoảng một nghìn tỷ mùi hương khác nhau",explanation:" Khứu giác của con người rất nhạy bén và có khả năng phân biệt nhiều loại mùi khác nhau."},
    { fact:"Loài chó có thể nhận biết hơn 250 từ và hành động",explanation:" Điều này cho thấy trí thông minh và khả năng huấn luyện của chúng."},
    { fact:"Một số loài côn trùng có thể sống sót mà không có đầu trong một thời gian ngắn",explanation:" Điều này là do hệ thống thần kinh và tuần hoàn đơn giản của chúng."},
    { fact:"Con người tiêu thụ khoảng 70,000 lần trong suốt cuộc đời",explanation:" Điều này giúp tiêu hóa thức ăn và bảo vệ đường tiêu hóa."},
    { fact:"Mỗi người có một hệ vi sinh vật duy nhất trong đường ruột",explanation:" Hệ vi sinh vật này đóng vai trò quan trọng trong việc tiêu hóa và miễn dịch."},
    { fact:"Một con kiến có thể nâng một vật nặng gấp 50 lần trọng lượng cơ thể của nó",explanation:" Sức mạnh này giúp chúng xây dựng tổ và tìm kiếm thức ăn."},
    { fact:"Con người là loài duy nhất có thể tạo ra lửa",explanation:" Kỹ năng này đã giúp chúng ta tiến hóa và phát triển."},
    { fact:"Cá bống vây châm có thể di chuyển trên cạn bằng cách nhảy",explanation:" Điều này giúp chúng di chuyển giữa các vũng nước."},
    { fact:"Tim của con người đập khoảng 100,000 lần mỗi ngày",explanation:" Điều này bơm máu và cung cấp oxy cho cơ thể."},
    { fact:"Loài hải cẩu có thể lặn sâu đến 1,500 mét dưới nước",explanation:" Điều này giúp chúng săn mồi ở các độ sâu lớn."},
    { fact:"Những con bướm có thể nếm bằng chân",explanation:" Điều này giúp chúng phát hiện thức ăn khi đậu lên các bề mặt."},
    { fact:"Người Ai Cập cổ đại là những người đầu tiên sử dụng kem đánh răng",explanation:" Họ sử dụng hỗn hợp gồm muối, tiêu, lá bạc hà và nước để làm sạch răng."},
    { fact:"Có hơn 2 triệu loài động vật được phát hiện trên Trái Đất",explanation:" Tuy nhiên, ước tính có khoảng 8.7 triệu loài vẫn chưa được phát hiện."},
    { fact:"Nấm là loài sinh vật sống lớn nhất trên Trái Đất",explanation:" Một cây nấm dưới mặt đất ở Oregon, Mỹ, có diện tích khoảng 965 ha."},
    { fact:"Loài chuột cống có thể sống sót mà không có nước trong thời gian dài hơn so với lạc đà",explanation:" Chúng có khả năng hấp thụ nước từ thức ăn."},
    { fact:"Một số loài chim có khả năng bay liên tục trong nhiều ngày mà không nghỉ",explanation:" Ví dụ như chim hải âu có thể bay liên tục trong 10 ngày mà không cần nghỉ ngơi."},
    { fact:"Cá heo có một nửa não ngủ trong khi nửa còn lại vẫn tỉnh táo",explanation:" Điều này giúp chúng thở và bảo vệ bản thân khi ngủ."},
    { fact:"Hệ Mặt Trời của chúng ta chỉ là một trong hàng tỷ hệ mặt trời trong Dải Ngân Hà",explanation:" Điều này cho thấy vũ trụ rộng lớn và phức tạp như thế nào."},
    { fact:"Một con ong mật cần bay khoảng 90,000 km để tạo ra 0.45 kg mật ong",explanation:" Điều này tương đương với hai vòng quanh Trái Đất."},
    { fact:"Con người có khoảng 5 triệu nang tóc trên cơ thể",explanation:" Hầu hết các nang tóc này nằm trên da đầu."},
    { fact:"Loài hươu cao cổ ngủ trung bình chỉ 30 phút mỗi ngày",explanation:" Chúng ngủ ngắn để tránh bị săn bắt bởi các loài thú ăn thịt."},
    { fact:"Một giọt nước biển chứa khoảng một triệu vi sinh vật",explanation:" Điều này cho thấy biển cả đầy sự sống vi mô."},
    { fact:"Tim của một con voi có thể nặng tới 12-21 kg",explanation:" Kích thước lớn này giúp bơm máu cho toàn bộ cơ thể lớn của chúng."},
    { fact:"Có một số loài ếch có thể đóng băng và sau đó hồi sinh",explanation:" Chúng có khả năng tự sản sinh các chất chống đông trong cơ thể."},
    { fact:"Con người mất khoảng 1 triệu tế bào da mỗi ngày",explanation:" Các tế bào da này được thay thế liên tục để bảo vệ cơ thể."},
    { fact:"Loài cá heo có thể giao tiếp bằng cách sử dụng sóng siêu âm",explanation:" Chúng phát ra âm thanh để định vị và giao tiếp với nhau."},
    { fact:"Nhiệt độ bề mặt của Mặt Trời khoảng 5,500 độ Celsius",explanation:" Nhiệt độ này làm cho Mặt Trời phát sáng và cung cấp năng lượng cho hệ Mặt Trời."},
    { fact:"Tất cả các loài sứa không có não",explanation:" Chúng sử dụng hệ thống thần kinh phân tán để cảm nhận môi trường xung quanh."},
    { fact:"Mỗi người có một dấu vân tay và một dấu lưỡi riêng biệt",explanation:" Không ai có dấu vân tay hoặc dấu lưỡi giống nhau."},
    { fact:"Một số loài tắc kè có thể thay đổi màu sắc để ngụy trang",explanation:" Điều này giúp chúng tránh bị kẻ săn bắt."},
    { fact:"Mắt của loài ong có thể nhìn thấy tia cực tím",explanation:" Điều này giúp chúng tìm thấy hoa và mật hoa dễ dàng hơn."},
    { fact:"Loài cua dừa là loài cua lớn nhất trên cạn",explanation:" Chúng có thể đạt tới chiều dài 1 mét và nặng 4 kg."},
    { fact:"Con người có thể nhìn thấy khoảng 10 triệu màu sắc khác nhau",explanation:" Điều này nhờ vào ba loại tế bào hình nón trong mắt."},
    { fact:"Có một lượng nhỏ vàng trong mỗi con người",explanation:" Cơ thể người chứa khoảng 0.2 milligram vàng, phần lớn trong máu."},
    { fact:"Một con gián có thể sống sót một tuần mà không có đầu",explanation:" Chúng chỉ chết vì không thể uống nước."},
    { fact:"Cá voi lưng gù có các bài hát dài phức tạp",explanation:" Những bài hát này có thể kéo dài đến 20 phút và lặp lại nhiều giờ."},
    { fact:"Người Eskimo có nhiều từ để miêu tả tuyết",explanation:" Ngôn ngữ của họ phản ánh sự quan trọng của tuyết trong cuộc sống hàng ngày."},
    { fact:"Con người có thể tạo ra hơn 7,000 biểu cảm khuôn mặt khác nhau",explanation:" Điều này nhờ vào các cơ mặt linh hoạt."},
    { fact:"Loài cá chép có thể sống mà không có nước trong một thời gian dài",explanation:" Chúng có thể sống trong bùn và hấp thụ oxy qua da."},
    { fact:"Con người có thể nhận biết khoảng 10,000 hương vị khác nhau",explanation:" Khứu giác và vị giác phối hợp để tạo ra khả năng nhận biết này."},
    { fact:"Loài cú mèo có khả năng nghe tốt nhất trong thế giới chim",explanation:" Tai của chúng có thể phát hiện âm thanh rất nhỏ từ khoảng cách xa."},
    { fact:"Có một số loài động vật có thể tự thay đổi giới tính trong suốt cuộc đời",explanation:" Ví dụ như cá hề có thể chuyển đổi giữa giới tính đực và cái."},
    { fact:"Một số loài cây có thể giao tiếp với nhau qua rễ và hóa chất trong không khí",explanation:" Chúng cảnh báo nhau về nguy hiểm như côn trùng tấn công."},
    { fact:"Loài kiến có thể tạo ra các cấu trúc phức tạp từ chính cơ thể chúng",explanation:" Chúng tạo ra cầu và các đường hầm bằng cách liên kết nhau."},
    { fact:"Cá mập có thể cảm nhận được nhịp tim của con mồi từ xa",explanation:" Chúng sử dụng các cơ quan cảm biến điện trường để phát hiện nhịp tim."},
    { fact:"Con người là loài duy nhất có khả năng cười",explanation:" Tiếng cười giúp tạo ra liên kết xã hội và giảm căng thẳng."},
    { fact:"Bức xạ từ Mặt Trời mất khoảng 8 phút để đến Trái Đất",explanation:" Ánh sáng di chuyển qua khoảng cách 149.6 triệu km từ Mặt Trời đến Trái Đất với tốc độ ánh sáng."}
];
document.addEventListener('DOMContentLoaded', () => {
    const factList = document.getElementById('factList');

    facts.forEach((item, index) => {
        let li = document.createElement('li');
        li.innerHTML = `${index + 1}. ${item.fact}<div class="explanation">${item.explanation}</div>`;
        li.addEventListener('click', () => {
            const explanation = li.querySelector('.explanation');
            const isActive = li.classList.contains('active');

            // Close all explanations first
            const allItems = factList.getElementsByTagName('li');
            Array.from(allItems).forEach(item => {
                if (item !== li) {
                    item.classList.remove('active');
                    item.querySelector('.explanation').style.maxHeight = null;
                }
            });

            // Toggle active class for li
            li.classList.toggle('active');

            // Toggle show class for explanation
            explanation.style.maxHeight = isActive ? null : explanation.scrollHeight + "px";
        });
        factList.appendChild(li);
    });
});

function searchFacts() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let li = document.getElementById('factList').getElementsByTagName('li');
    
    for (let i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toLowerCase().indexOf(input) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
