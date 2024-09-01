import './css/Reset.css';
import './css/Detail.css';
import Top from './Top.js';

function Detail() {

    return (
        <>
            <Top/>
            <div class="wrapper">
                <div class="content">

                    <div class="card-detail"><h2><a href="#">Hey looks it's another post</a></h2>
                        <p class="date">18 October, 2014</p>
                        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.  Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. <br /><br />Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies.
                            Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. </p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Detail;