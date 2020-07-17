// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FolderOpenFilledSvg from '@whalue-design/icons-svg/lib/asn/FolderOpenFilled';

export default {
  name: 'IconFolderOpenFilled',
  displayName: 'FolderOpenFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderOpenFilledSvg } },
      children,
    ),
};