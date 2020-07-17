// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DropboxSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/DropboxSquareFilled';

export default {
  name: 'IconDropboxSquareFilled',
  displayName: 'DropboxSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DropboxSquareFilledSvg } },
      children,
    ),
};