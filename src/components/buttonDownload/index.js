import React from 'react';
import ReactToPrint from 'react-to-print';
import { AnalyseGraphique } from '../analyse';


class PdfComponent extends React.Component {
    
    render() {
      return (
        <div>
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
          />
          <AnalyseGraphique ref={(response) => (this.componentRef = response)} />
        </div>
      );
    }
}
export default PdfComponent;