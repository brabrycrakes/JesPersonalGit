      var MemoryGameCard = React.createClass({
        render: function () {
          return (
						<div className="card">
							<div className="card-inner">
								<div className="logo"></div>
								<div className="card-content">
									<i className="fa"></i>
								</div>		
							</div>						
						</div>					
					);
        }
      });
			
      var MemoryGameBoard = React.createClass({
        render: function () {
          return (
						<div className='card-box'>
							<MemoryGameCard /><MemoryGameCard /><MemoryGameCard /><MemoryGameCard />
							<MemoryGameCard /><MemoryGameCard /><MemoryGameCard /><MemoryGameCard />
							<MemoryGameCard /><MemoryGameCard /><MemoryGameCard /><MemoryGameCard />
							<div className='card-align'>
								<p>Moves: <span className='numMoves'></span></p>
								<button type="button" className='btn btn-default resetCards'>Reset</button>		
							</div>
						</div>
					);
        }
      });			
					 
      ReactDOM.render(
        <MemoryGameBoard />,
        document.getElementById('memoryGameBoard')
      );
			
			//TO DO: Make this generic so that I can inject a different title
      var ModalHeader = React.createClass({
        render: function () {
          return (
						<div className="modal-header">
							<button type="button" className="close" title="Close"><span>&times;</span></button>						
							<h4 className="modal-title logo-text">Memory Game</h4>
						</div>					
					);
        }
      });			
			
			//TO DO: Make this generic so that I can inject different content. Also, need to somehow get it to recognize the numMoves var
      var ModalBody = React.createClass({
        render: function () {
          return (
						<div className="modal-body">
							<p>Yay! You won in <span className="numMoves"></span> moves.</p>
						</div>					
					);
        }
      });			
      var ModalFooter = React.createClass({
        render: function () {
          return (
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>					
					);
        }
      });		

      var ModalDialog = React.createClass({
        render: function () {
          return (
						<div className="modal-dialog">
							<div className="modal-content">
								<ModalHeader />
								<ModalBody />
								<ModalFooter />
							</div>	
						</div>					
					);
        }
      });			

      ReactDOM.render(
        <ModalDialog />,
        document.getElementById('memoryGameWin')
      );			