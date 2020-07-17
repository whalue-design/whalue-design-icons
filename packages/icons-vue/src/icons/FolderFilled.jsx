// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FolderFilledSvg from '@whalue-design/icons-svg/lib/asn/FolderFilled';

export default {
  name: 'IconFolderFilled',
  displayName: 'FolderFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderFilledSvg } },
      children,
    ),
};