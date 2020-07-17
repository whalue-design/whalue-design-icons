// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FolderAddFilledSvg from '@whalue-design/icons-svg/lib/asn/FolderAddFilled';

export default {
  name: 'IconFolderAddFilled',
  displayName: 'FolderAddFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FolderAddFilledSvg } },
      children,
    ),
};