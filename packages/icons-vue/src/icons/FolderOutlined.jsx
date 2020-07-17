// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FolderOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FolderOutlined';

export default {
  name: 'IconFolderOutlined',
  displayName: 'FolderOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderOutlinedSvg } },
      children,
    ),
};