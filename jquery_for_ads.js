		fetch_data = function(){
			console.log('fetch_data');	
			
			var dt = $('#example').DataTable( {
		        "processing": true,
		        "serverSide": true,
		        "ajax": {
		        		url : "https://sscn.bkn.go.id/lowongan/spf",
		        		type : "POST",
		        		data : {
		        				jenisFormasi : $('#jenisFormasi').val(),
		        				pendidikanFormasi : $('#pendidikanFormasi').val(),
		        				instansiFormasi : $('#instansiFormasi').val(),
		        				jabatanFormasi : $('#jabatanFormasi').val(),
		        				lokasiFormasi : $('#lokasiFormasi').val()
		        			},
		        		dataFilter: function(data){
			                    var json = jQuery.parseJSON( data );
			                    console.log(json);
			                    json.recordsTotal = json.recordsTotal;
			                    json.recordsFiltered = json.recordsFiltered;
			                    json.data = json.data;
			          
			                    return JSON.stringify( json ); // return JSON string
			                }	
		    			},
		    	"deferRender": true,           		
					"columns": [
						{ "data": "ROWNUM" },
						{ "data": "PENDIDIKAN_NM" },
						{ "data": "JAB_NM" },
						{ "data": "INS_NM" },
						{ "data": "JENIS_FORMASI_NM" },
						{ "data": "LOKASI_NM" },
						{ "data": "JUM_PERJAB" },
						{ "data": "JUM_PENDAFTAR" },
						{ "data": "LINK_WEB_INS_DAFTAR" }

      				  ],
					  "columnDefs": [ 
					  {
						"targets": 8,
						"render": function ( data, type, row, meta ) {
						  return data == '' ? '' : '<a href="'+data+'" target="_blank">Download</a>';
						}
					  } ],		
	    	});   	
	    	$('.dataTables_filter').addClass('hide-search');
		};

		fetch_data();
		

		$('#btnSearch').click(function(){
			$('#example').DataTable().destroy();
			fetch_data();	
		}) 

		$("input[type='text']").bind('keypress', function(e) {
		    if(e.keyCode==13){
		    	$('#example').DataTable().destroy();
		        fetch_data();
		    }
		}); 
    });
