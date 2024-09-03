import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PaddedComponent from '../components/MyComponent/PaddedComponent/PaddedComponent';
import Row from '../common/Row';
import Column from '../common/Column';
import ClubCard from '../components/ClubCard/ClubCard';

const Home: React.FC = () => (
  <PaddedComponent>
    <h1>Home Page</h1>
    <Row>
      <Column>
        <Button
          variant="contained" 
          color="primary" 
          style={{ width: '100%', marginBottom: '20px' }}
          component={Link} to="/video">
          Go to Video Page 
        </Button>
      </Column>
    </Row>
    <Row>
      <Column>
        <Button
          variant="contained" 
          color="primary" 
          style={{ width: '100%', marginBottom: '20px' }}
          component={Link} to="/about">
          Go to About Page 
      </Button>
      </Column>
    </Row>
    <Row>
      <Column>
        <Button
          variant="contained" 
          color="primary" 
          style={{ width: '100%', marginBottom: '20px' }}
          component={Link} to="/club">
          Go to Club Page 
      </Button>
      </Column>
    </Row>
    <Row>
      <Column>
        <ClubCard 
          clubName="FC Barcelona" 
          clubLogo="data:image/png;base64,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" 
          clubLink="/club/barcelona" 
        />
         </Column>
         <Column>
        <ClubCard 
          clubName="FC Barcelona" 
          clubLogo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAABNpJREFUaIHt2X/on1UVB/DXV/3OTXH5R/ZjObzQsJzoppYusqbBnSy1oQ4Vc5aRYkVh+EcaJAhWE3JqP6gsLDEzS4WhGXFx+COUTdkMrVFm3qXNpC1Kaa7m9u2Pc7/zs6FQz/NsS9j7n+dzz32e533O555z7jn3YS/24o2PIu3X9dl9hlSkBy4p0vwuD+4RA4r0iSIdOiJ6Dz7Q5V17agX+geuK9KY2XoJtXV60pwxYhGextEjH4E9Y0OVFu92AFrBL8Gf8AT/CTdjY5X2do/81FPs6nsb1TXQnfopf4uisPtTkj+EbuABLsQ7zhBH/MwZZgSItFUF4DJ4S7nEWLsOtwucVaRnGMYbrcDVWYV/8vgv3WE/dt6NI94p/fRzfbuJ/Z3X/Nn+VcJ2bxcp/BN/DfGzI6qe68PZyoRaAV2GK8OcVWX2mSB8TbrGt3Xcr3iIM3IpTsRB3YDPO6apDLxfK6hochsvxR2ws0slNeTixSI8KF/otNrS5xcLVfo1NWe2UQhkmBj6f1cezukz4/Yom/zi+i4fxO0zgFTwkAvcynIZr+5D3NiCrK6BIt3g1k/xABOYGYcQiHCRibgGuEHHyNazswz9IEBdpJY7HL7Awq2NFmsB0vNhuuwk34D6Rce7G+7K6qA937xUo0o+F8t/CDNxVpOl4FJ9ptz2IE8Qq3IE34/19lafnChRpNn7Thm/FC2IjWyuyyw04GD8XGe9xnC/8/ghc0ieA6b8CV7Tr80JRuAgfwpwR2Ti+3K7P4Vxc3Fd5+pcSs9t1mkiLcCBOxwFtvA1PCPc6GvdjbVZ7Ugf6rsAr7XpwViewvo0PwE9wZeNYgqPa/Mys3tyTdzv6GjBZoE2WEh8emTtQ5Pl5IqDPwbtEDTQY+hpw+cjvhbgUn27j0/EdPIA1otRYmtXHenLugN77QJHmCgUn8XdRIkz2uKdiOT4pstJUzMrqc325GW4jOwi3CWVfC4tF/p+Ov4nkMSWrW/pyD9IPZPWlrJ6G40SzsnynW04QGesrOLbJlg3BPXRLeRI+i2OzOib8Hw7P6lrsm9UnsBpnDEE4tAHnitpnZpGmiexDFHNE9wU34pAhCIc24KOiCi04E0+KE4fVrWb6WWs/19gx8DtjsKa+4Z0i/38pqyuhSGeJje68Nl6GI/HNgbn7o0jPF+menWQXt9J6VHbK7tXsv0CRzt5Z0SafWqSJIk3ZFbxDxsDtmLmzMKubRRNzwYBc29F5IyvSpaJhmYWXRdX5fTyS1duLlMWZ0FbRgX0QX8RLWR3M//sE8Y2iEztZHAtuxaFe3Y3X4Ve4Bs+IBmcmPteD8/8DQ8ZDJxcq0l1iJ01ZXTcif5vozjaJnuCHWb2wzc0VsbBe9MaHtd26F7oG8XJsHFUesvoXsRMvbspdA0V6h9i45mX1qKwmzG8G90LXGNjP6xs/hn2KNEtUnkThdltWJ9tOWX2wI/cO2BXfB14WB1tPYfILzGxx9D44doUB03BRc6EXmuxZvHcXcHU2YJtIm4r09iLNGZmbwP6Q1clTuS/glCJNHvoq0ruLNKMj/3Z0zUKrxD/6ouiyjsdXxZn/P8W555V4OKuHt2cWiK8167FFy0JF2pzVqbvbgGn4l2hQtozIx9vP8axuep1nZ2BLVv/ahXsv9mJg/Adg0lFtPeDAdQAAAABJRU5ErkJggg==" 
          clubLink="/club/barcelona" 
        />
      </Column>
    </Row>
  </PaddedComponent>
);

export default Home;